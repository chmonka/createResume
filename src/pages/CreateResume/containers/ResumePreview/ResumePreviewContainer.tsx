import { Box, Grid, TextField, Typography } from '@mui/material'
import Accordionlist from '../../../../components/Accordion/AccardionList.tsx'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import { ChangeEvent, useEffect, useState } from 'react'

// import TextField from '@mui/material/TextField';

function ResumePreviewContainer() {
  const [editingList, setEditingList] = useState<number | null>(null)
  const [editingListItem, setEditingListItem] = useState<number | null>(null)
  const [innerValue, setInnerValue] = useState<string>('')
  // const [selectedItem: number setSelectedItem] = useState<number | null>(null);
  const [items, setItems] = useState<
    Array<{ title: string; icon?: JSX.Element; content: string[] }>
  >([
    {
      title: 'Контакты',
      icon: <LocalPhoneIcon style={{ color: 'white' }} />,
      content: ['+79536563765', 'smirno@mail.ru', 'SmimovDima'],
    },
    {
      title: 'Знание языков',
      icon: undefined,
      content: ['Русский язык', 'Английский', 'Немецкий'],
    },
    {
      title: 'Навыки',
      icon: undefined,
      content: ['Публичные выступления', 'Деловая переписка', 'Ведение переговоров'],
    },
  ])

  function handleBlock(index: number) {
    setEditingList(index)
  }

  function handleContentChange(index: number) {
    setEditingListItem(index)
    setInnerValue('')
  }

  function handleInputValue(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    setInnerValue(e.target.value)
  }

  useEffect(() => {
    editItems()
    renderForm()
  }, [editingList, editingListItem, items])

  function editItems() {
    if (editingList !== null) {
      if (editingListItem !== null) {
        const updatedItems = items.map((item, idx) => {
          if (idx === editingList) {
            item.content[editingListItem] = innerValue
          }
          return item
        })
        setItems(updatedItems)
      }
    }
  }

  function renderForm() {
    if (editingList !== null && editingListItem !== null) {
      return (
        <TextField
          label='Filled'
          variant='filled'
          value={items[editingList].content[editingListItem]}
          onChange={handleInputValue}
        />
      )
    } else {
      return (
        <TextField
          label='Filled'
          variant='filled'
          // value={items[editingList].content[editingListItem]}
          onChange={handleInputValue}
        />
      )
    }
  }

  return (
    <Grid
      sx={{
        padding: '0px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          padding: '0px',
          border: '1px solid white',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
          }}
        >
          <Box>
            <img src='' alt='' />
            <Grid>
              <Typography variant='h2' fontSize='20px' color='white'>
                СМИРНОВ ДМИТРИЙ ВЛАДИМИРОВИЧ
              </Typography>
              <Typography variant='h3' fontSize='20px' color='white'>
                Возраст: 27лет
              </Typography>
              <Typography variant='h3' fontSize='20px' color='white'>
                Должность: ...
              </Typography>
              <Typography variant='h3' fontSize='20px' color='white'>
                Заработная плата: 120000 руб
              </Typography>
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <Accordionlist
              handleListItem={handleContentChange}
              handleBlock={handleBlock}
              items={items}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Accordionlist
            handleListItem={handleContentChange}
            handleBlock={handleBlock}
            items={items}
          />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: 'white',
          width: '100%',
          height: '50%',
        }}
      >
        {renderForm()}
      </Box>
    </Grid>
  )
}

export default ResumePreviewContainer
