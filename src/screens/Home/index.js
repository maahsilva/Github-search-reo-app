import React, { Component } from 'react'
import { View, Text, TextInput, FlatList, ActivityIndicator, Linking, TouchableOpacity, Alert } from 'react-native'

import repositoriesService from '../../services/repositories'
import {styles} from './styles'

const PER_PAGE = 20

export default class Home extends Component {
    state = {
        data: [],
        page: 0,
        loading: false,
        error: false, 
        searchBy: '',

    }

    getRepositories = async () => {
        if(!this.state.loading) {
            const {page, searchBy} = this.state;

            this.setState({
                loading: true,
                error: false,
            })
    
            const {error, data} = await repositoriesService.get(searchBy, page, PER_PAGE)
    
    
            if (error) {
                this.setState({
                    error: true,
                    loading: true
                })
                return
            }

            this.setState({
                loading: false,
                error: false,
                data,
                page: page + 1
            })
        }
    }

    changeSearchBy = (e) => {
        const searchBy = e.nativeEvent.text
        this.setState({
            searchBy,
            page: 0,
        })
    }

    searchField = () => {
        if (this.state.searchBy){
            this.getRepositories()
        } else {
            Alert.alert('Erro', 'Por favor preencha o campo antes de Pesquisar!')
        }
    }

    renderFooter = () => {
        if (!this.state.loading) return null;
        
        return (
            <View style={styles.loading}>
                <ActivityIndicator />
            </View>
        );
    };

    renderItem = ({ item}) => (
        <View style={styles.listItem}>
            <Text onPress={() => {
                Linking.openURL(`${item.html_url}$`);
            }}>
                {item.html_url}
            </Text>
        </View>
    )

    render () {
        return (
            <View> 
                <View style={styles.containerSearch}>
                    <TextInput
                        style={styles.searchField} 
                        placeholder='Busque um Repositorio' 
                        value={this.state.searchBy} 
                        onChange={this.changeSearchBy.bind(this)}
                        placeholderTextColor="#e84393"
                    />

                    <TouchableOpacity onPress={this.searchField} style={styles.button}>
                        <Text  style={styles.textSearchButton}>
                            Pesquisar
                        </Text>
                    </TouchableOpacity>
                </View> 
                {
                    this.state.data.length > 0 ? (
                        <FlatList 
                            style={{ marginTop:30 }}
                            contentContainerStyle={styles.list}
                            data={this.state.data}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.id}
                            onEndReached={() => this.getRepositories()}
                            onEndReachedThreshold={0.1}
                            ListFooterComponent={this.renderFooter}
                        />
                    ) : (

                        <View style={styles.containerDataIsEmpty}  > 
                            <Text style={styles.dataIsEmpty} > Por favor preencha o campo de pesquisa! </Text>
                        </View>
                    )
                     
                }
               
            </View>
        )
    }
}