import CustomTooltip from '@/components/Tooltip'
import formateName from '@/helpers/formateName'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import { Container, Td } from './styles'
import Thead from './Thead'

const TablePatients = ({orders,setOrders}) => {
  const [patients, setPatients] = useState(null);
  // useEffect(() => {
  //  const OrderRquest = async () =>{
  //    try{
  //      const {data} = await apiPatient.get(`/paciente?limit=10&`)
  //       setPatients(data)
  //    }
  //    catch({response}){
  //     alert(response)
  //    }
  //  }
  // }, [orders])

  return (
    <Container>
      <table cellSpacing="0">
        <Thead setOrders={setOrders} orders={orders} />
        <tbody>
          <tr>
            <Td soft>22/09/2021 - 18:07</Td>
            <Td strong id="patient-name">
              <CustomTooltip label="Alice Nogueira da Silva Pereiraaaaaaaaaaaaaaaaa">
                <div>{formateName('Alice Nogueira da Silva PereiraaaaaaaEFGHJKLPaaaaaaaaaa')}</div>
              </CustomTooltip>
            </Td>
            <Td strong>218.537.546-68</Td>
            <Td soft>Rogério Cerqueira</Td>
            <Td soft>22/09/2021 - 18:56</Td>
            <Td status='Negado'>
              <span>Negado</span>
            </Td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default TablePatients
