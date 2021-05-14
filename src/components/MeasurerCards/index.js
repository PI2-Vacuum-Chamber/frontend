import React, { useCallback, useEffect, useState } from 'react';
import Card from '../Card';
import { Container } from './styles';
import api from '../../services/api';

const options = [
  {
    label: 'Atmosféra (atm)',
    value: 'atm'
  },
  {
    label: 'Milibar (mbar)',
    value: 'mbar'
  },
  {
    label: 'Pascal (Pa)',
    value: 'Pa'
  },
];

const optionsTemp = [
  {
    label: 'Celsius (ºC)',
    value: 'C'
  },
  {
    label: 'Fahrenheit (ºF)',
    value: 'F'
  },
  {
    label: 'Kelvin (K)',
    value: 'K'
  },
];

function MeasurerCards() {
  const [pressure, setPressure] = useState();
  const [tempCamara, setTempCamara] = useState();
  const [tempLinha, setTempLinha] = useState();

  const [pressureUM, setPressureUM] = useState('atm');
  const [tempCamaraUM, setTempCamaraUM] = useState('C');
  const [tempLinhaUM, setTempLinhaUM] = useState('C');

  const loadSensors = useCallback(async () => {
    try{
      const response = await api.get('/sensor/getmeans');
      setPressure(response.data.data.find(item => item._field === 'camara' && item._measurement === 'pressure')?._value);
      setTempCamara(response.data.data.find(item => item._field === 'camara' && item._measurement === 'temperature')?._value);
      setTempLinha(response.data.data.find(item => item._field === 'linha' && item._measurement === 'temperature')?._value);
    }catch(err){
      console.log(err)
    }
  }, []);

  const convertPressure = useCallback((value) => {
    if(pressureUM === 'atm'){
      return (value * 1).toFixed(2);
    }
    if(pressureUM === 'mbar'){
      return (value * 1.01325).toFixed(2);
    }
    if(pressureUM === 'Pa'){
      return (value * 101325).toFixed(2);
    }

  }, [pressureUM])
  
  const convertTemp = useCallback((value) => {
    if(tempCamaraUM === 'C'){
      return (value * 1).toFixed(2);
    }
    if(tempCamaraUM === 'F'){
      return (value * 32).toFixed(2);
    }
    if(tempCamaraUM === 'K'){
      return (value * 273.15).toFixed(2);
    }
  }, [tempCamaraUM])

  const convertTempLinha = useCallback((value) => {
    if(tempLinhaUM === 'C'){
      return (value * 1).toFixed(2);
    }
    if(tempLinhaUM === 'F'){
      return (value * 32).toFixed(2);
    }
    if(tempLinhaUM === 'K'){
      return (value * 273.15).toFixed(2);
    }
  }, [tempLinhaUM])

  useEffect(() => {
    loadSensors();
  }, []);

  return (
    <Container>
      <Card 
        controls='p' 
        title='Pressão média' 
        option={pressureUM}
        options={options} 
        valueMetric={convertPressure(pressure)} 
        setUM={setPressureUM}
      />
      <Card 
        controls='t' 
        title='Temperatura da câmara' 
        option={tempCamaraUM}
        options={optionsTemp} 
        valueMetric={convertTemp(tempCamara)} 
        setUM={setTempCamaraUM}
      />
      <Card 
        controls='tg' 
        title='Temperatura linha de gás'
        option={tempLinhaUM} 
        options={optionsTemp} 
        valueMetric={convertTempLinha(tempLinha)} 
        setUM={setTempLinhaUM}
      />
    </Container>
  );
}

export default MeasurerCards;