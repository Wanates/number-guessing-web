import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App: React.FC = () => {
  const [guess, setGuess] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(0);
  const [randomNumber, setRandomNumber] = useState<number>(
    Math.floor(Math.random() * 101)
  );

  const makeGuess = () => {
    const userGuess = parseInt(guess, 10);

    if (isNaN(userGuess)) {
      setMessage('Please enter a valid number');
      return;
    }

    if (userGuess < 0 || userGuess > 100) {
      setMessage('Please enter a number between 0 and 100');
      return;
    }

    setAttempts((prev) => prev + 1);

    if (userGuess === randomNumber) {
      setMessage('🎉 Congratulations, you guessed correctly! 🎉');
    } else if (userGuess < randomNumber) {
      setMessage('Try a higher number');
    } else {
      setMessage('Try a lower number');
    }

    setGuess('');
  };

  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 101));
    setAttempts(0);
    setMessage('');
    setGuess('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number Guessing Game</Text>
      <Text style={styles.instruction}>
        Guess a number between 0 and 100:
      </Text>
      <Text style={styles.message}>{message}</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess}
        placeholder="Enter your guess"
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.button} onPress={makeGuess}>
        <Text style={styles.buttonText}>Make Guess</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={resetGame}>
        <Text style={styles.buttonText}>Reset Game</Text>
      </TouchableOpacity>

      <Text style={styles.attempts}>Attempts: {attempts}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
  instruction: {
    fontSize: 18,
    marginBottom: 10,
    color: '#34495e',
  },
  input: {
    fontSize: 18,
    height: 50,
    borderColor: '#2980b9',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#2980b9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  attempts: {
    fontSize: 18,
    marginTop: 20,
    color: '#34495e',
  },
});

export default App;
