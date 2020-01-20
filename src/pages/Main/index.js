import React, {useEffect, useState} from 'react';
import socketio from 'socket.io-client';

import api from '../../services/api'

import { Container } from './styles';

import DevItem from '../components/DevItem'

export default function Main() {
  const [devs,setDevs] = useState([]);

  const socket = socketio('http://localhost:3333');

  socket.on('dev_created', data => {
    setDevs([...devs, data])
  });

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('devs');

      setDevs(response.data);
    }
    loadDevs();
  },[])
  return (
    <Container>
      <ul>
        {devs.map(dev => (
          <DevItem dev={dev} key={dev._id} />
        ))}
      </ul>
    </Container>
  );
}
