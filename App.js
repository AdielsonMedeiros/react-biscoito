import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function App() {
  const emoji = '\u{1F44D}'
  const [img, setImg]= useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('')
  let frases = ['O santos é muito nanico e só ganhou alguma coisa na época do Pelé','O Vasco é um Gigante adormecido','O maior feito do São Paulo foi ter um goleiro artilheiro','A perseverança é a mãe da boa sorte','Imagine uma nova história para sua vida e acredite nela.',
'Ouça evoke preta.','água mole e pedra dura tanto bate até que é nós ' + `${emoji}`,'Jogue fortnite porém não recomendo','Não seja chato.','Vire Vasco '+ `${emoji}`,'Aprenda a intimidar como Tomas Shelby','Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.','Se você tem o sonho de fazer algo, lute por ele, pois ninguém lutará pra você.','com paciência e perseverança muito se alcança.']




  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random()* frases.length)
    setTextoFrase('"' + frases[numeroAleatorio] + '"')
    setImg(require('./src/biscoitoAberto.png'))
  }


  function reiniciar(){
    setImg(require('./src/biscoito.png'))
    setTextoFrase('')
  }




  return (
    <View style={styles.container}>

      <Image source={img} style={styles.img}/>

      <Text style={styles.textofrase}>{textoFrase}</Text>
      <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito }>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { marginTop:15, borderColor: '#121212',}]} onPress={ reiniciar }>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color: '#121212'}]}>Reniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    width:230,
    height:230,
  },
  textofrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height:50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
})

export default App;
