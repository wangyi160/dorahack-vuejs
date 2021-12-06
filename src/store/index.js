import Vue from 'vue'
import Vuex from 'vuex'

import getWeb3 from '../util/getWeb3'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loadComplete: false,
        userInformation: {},
        comSelectList: [],
        userPhone: '',
        payOut: {
            step1: {},
            step2: {},
            step3: {
                existBeneficiaryInfo: {
                    paymentMethod: '',
                },
            },
            senderList: [],
            beneficiaryList: [],
            payOutWalletList: [],
            payOutOptionsList: [],
        },
        countDown: 300,

        web3: {
            isInjected: false,
            web3Instance: null,
            networkId: null,
            coinbase: null,
            balance: null,
            error: null
        },
        contractInstance: null
    },
    mutations: {
        setLoad(state, load) {
            state.loadComplete = load
        },
        setUserInfomation(state, data) {
            state.userInformation = data
        },
        setComSelectList(state, data) {
            state.comSelectList = data
        },
        saveUserPhone(state, data) {
            state.userPhone = data
        },
        setPayOutStepData(state, data) {
            // console.log('存储store',data)
            // console.log('存储中payOut值',state.payOut)
            const statePara = 'step' + data.num
            state.payOut[statePara] = data.data
        },
        saveSenderList(state, data) {
            state.senderList = data
        },
        saveBeneficiaryList(state, data) {
            state.beneficiaryList = data
        },
        savePayOutWalletList(state, data) {
            state.payOutWalletList = data
        },
        savePayOutOptionsList(state, data) {
            state.payOutOptionsList = data
        },
        saveCountDown(state, data) {
            state.countDown = data
        },

        registerWeb3Instance(state, payload) {
            console.log('registerWeb3instance Mutation being executed', payload)
            let result = payload
            let web3Copy = state.web3
            web3Copy.coinbase = result.coinbase
            web3Copy.networkId = result.networkId
            web3Copy.balance = result.balance.toNumber() / 1E18 //parseInt(result.balance, 10)
            web3Copy.isInjected = result.injectedWeb3
            web3Copy.web3Instance = result.web3
            state.web3 = web3Copy

        },

    },
    actions: {
        async getComSelectList({ commit }) {
            let temp = JSON.parse(sessionStorage.getItem('comInfo'))
            if (!temp) {
                await Vue.prototype.$api
                    .getComSelectList()
                    .then(res => {
                        if (res.code === '0') {
                            sessionStorage.setItem('comInfo', JSON.stringify(res.data))
                            temp = res.data
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
            commit('setComSelectList', temp)
        },
        async getDataList({ dispatch, commit }) {
            await Promise.all(
                ['getComSelectList'].map(x => dispatch(x))
            )
            commit('setLoad', true)
                // await dispatch('getComSelectList')
                // await Promise.all(['getComSelectList'])
        },
        async getSelectList({ dispatch, commit }) {
            await dispatch('getComSelectList')
                // await Promise.all(['getComSelectList'])
        },

        registerWeb3({ commit }) {
            console.log('registerWeb3 Action being executed')

            getWeb3().then(result => {
                console.log('committing result to registerWeb3Instance mutation')
                commit('registerWeb3Instance', result)
            }).catch(e => {
                console.log('error in action registerWeb3', e)
            })

        },
    },
    modules: {},
})