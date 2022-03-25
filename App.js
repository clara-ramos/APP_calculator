
    //cores usadas - #B5B3B3, #000, #04B80C.



import {React, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { keyboardProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function App() {
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [result, setResult] = useState();

  function soma(){
    setResult (parseFloat (valor1) + parseFloat(valor2));
  }

  function subtracao(){
    setResult (parseFloat (valor1) - parseFloat(valor2));
  }

  function multiplicacao(){
    setResult (parseFloat (valor1) * parseFloat(valor2));
  }

  function divisao(){
    setResult (parseFloat (valor1) / parseFloat(valor2));
  }


  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Calculator </Text>
      <Image
        style={styles.logo}
        source={{
          uri: "https://i.pinimg.com/564x/e1/a7/44/e1a744d08c79e65942cb313a638a7fe1.jpg"
        }}
      />

  
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Primeiro valor </Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor1}
          placeholder='VALOR 1:'
          onChangeText={(texto)=>setValor1(texto)}
      />

      
    </View>
    <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Segundo Valor </Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          placeholder='VALOR 2:'
          value={valor2}
          onChangeText={(texto)=>setValor2(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity
        style={styles.botao}
        onPress={soma}>
            <Text style={styles.textoBotao}>SOMAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
        style={styles.botao}
        onPress={subtracao}>
            <Text style={styles.textoBotao}>SUBTRAIR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
        style={styles.botao}
        onPress={multiplicacao}>
            <Text style={styles.textoBotao}>MULTIPLICAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
        style={styles.botao}
        onPress={divisao}>
            <Text style={styles.textoBotao}>DIVIDIR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.texto}>RESULTADO: {result}</Text>
      </View>
    </View>
  );
}

// text input - text input é a função para requisitar uma informação em forma de texto, via teclado (keyboard) como valores, datas, nomes e outros
// return - vai lhe retornar o resultado da função que você requisitou seja ela uma conta, um cadastro ou etc
//input - A função input() recebe como parâmetro uma string que será mostrada como auxílio ao usuário, geralmente o informando que tipo de dado o programa está aguardando receber.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: '#B5B3B3',
    fontSize: 30
  },
  textoBloco:{
    color:'#B5B3B3',
    fontSize:30
  },
  input:{
    borderColor:'#04B80C',
    borderWidth:2,
    fontSize:30,
    width:'80%',
    textAlign: 'center',
    color: "#B5B3B3"
  },

  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao:{
    backgroundColor:'#04B80C',
    width:'80%',
    textAlign:'center',
   
  },
  textoBotao:{
    color:"#000",
    fontSize:30
  },
  logo:{
    width: 80,
    height: 70,
    margin: 5
  },

  //estilizar as variaveis com cores, fontes e etc, ou seja declarar elas e colocar em seguida colchetes para adicionar as informações 
  // ex: textoBotao: {color: "#000"},

});