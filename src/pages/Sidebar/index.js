import React, {useEffect, useState} from 'react';

import api from '../../services/api'
import DevForm from '../components/DevForm'

import { Container } from './styles';


export default function Sidebar() {

  async function handleAddDev(data){
    await api.post('devs',data);


  }

  return (
    <Container>
    <aside>
      <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      </Container>
  );
}
