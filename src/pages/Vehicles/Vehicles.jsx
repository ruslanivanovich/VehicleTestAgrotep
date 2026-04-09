import vehicles from "../../../public/vehicles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ArrowDownIcon from '../../assets/svg/arrow-down.svg?react'
import ArrowUpIcon from '../../assets/svg/arrow-up.svg?react'
import ModalWindow from "../Modal/Modal";
import { openTypeModal,closeModal } from "../../store/appslice";
import { useSelector,useDispatch } from "react-redux";
import { openModal,title } from "../../store/selectors";
import {
  TableHeader,
  Button,
  Title,
  StyledTable,
  THead,
  Th,
  Td,
  Tr,
  VehicleCell,
  VehicleImage,
  ColorBadge,
  ColorDot,
  Status,
  TableWrapper,
} from './VehiclesStyled'

export default function Vehicles() {
  const navigate = useNavigate()
  const [sortField, setSortField] = useState(null)
  const modal = useSelector(openModal)
  const titleModal = useSelector(title)
  const dispatch = useDispatch()
  const [sortOrder, setSortOrder] = useState('asc')
  function closeModalka(){
    dispatch(closeModal())
  }
  function openAddVehicleModal(){
    dispatch(openTypeModal('Do you want to add vehicle(this functionality is not working yet)'))
  }
  function handleSort(field) {
    if (sortField === field) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')
    }
    else {
      setSortField(field)
      setSortOrder('asc')
    }
  }
  const thFields = [
    {
      field: 'number',
      text: 'Number',
      function: handleSort
    },
    {
      field: 'brand',
      text: 'Brand',
      function: handleSort
    },
    {
      field: 'model',
      text: 'Model',
      function: handleSort
    },
    {
      field: 'year',
      text: 'Year',
      function: handleSort
    },
    {
      field: 'color',
      text: 'Color',
      function: handleSort
    },
    {
      field: 'mileage',
      text: 'Mileage',
      function: handleSort
    },
    {
      field: 'status',
      text: 'Status',
      function: handleSort
    },
  ]
  const sortedVehicles = [...vehicles].sort((a, b) => {
    if (!sortField) return 0
    let valueA = a[sortField]
    let valueB = b[sortField]
    if (typeof valueA === 'string') {
      return sortOrder === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA)
    }
    if (typeof valueA === 'number') {
      return sortOrder === 'asc'
        ? valueA - valueB
        : valueB - valueA
    }
  }

  )
  return (
    <TableWrapper>

      <TableHeader>
        {modal && (<ModalWindow closeModal={closeModalka} title={titleModal}/>)}
        <Title>Vehicles</Title>
        <Button variant='primary' onClick={()=> openAddVehicleModal()}>+ Add Vehicle</Button>
      </TableHeader>
      <StyledTable>
        <THead>
          <tr>
            {thFields.map(th =>
              <Th key={th.field} onClick={() => th.function(th.field)}>
                {th.text} 
                {sortField === `${th.field}` && (sortOrder === 'asc' ? <ArrowUpIcon /> : <ArrowDownIcon />)}</Th>
            )}
          </tr>
        </THead>
        <tbody>
          {sortedVehicles.map((v) => (
            <Tr key={v.id} onClick={() => navigate(`/vehicles/${v.id}`)}>
              <Td>
                <VehicleCell>
                  <VehicleImage src={v.imageUrl} />
                  {v.number}
                </VehicleCell>
              </Td>

              <Td>{v.brand}</Td>
              <Td>{v.model}</Td>
              <Td>{v.year}</Td>

              <Td>
                <ColorBadge>
                  <ColorDot color={v.color} />
                  {v.color}
                </ColorBadge>
              </Td>

              <Td>{v.mileage.toLocaleString()} km</Td>

              <Td>
                <Status status={v.status}>{v.status}</Status>
              </Td>
            </Tr>
          ))}
        </tbody>
      </StyledTable>

    </TableWrapper>



  )



}

