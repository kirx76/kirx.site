import React from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";

const IndexPage: React.FC = () => {
  return (
    <div style={{
      backgroundColor: 'black',
      width: '100%',
    }}>
      {/*<p>INDEX PAGE</p>*/}
      {/*<div style={{display: 'flex', flexDirection: 'column'}}>*/}
      {/*  <Button size={'small'} text={'Отправить'}/>*/}
      {/*  <Button size={'medium'} text={'Ключ на старт'}/>*/}
      {/*  <Button size={'medium'} reversed text={'Ключ на старт'}/>*/}
      {/*  <Button size={'small'} reversed text={'Скачать бриф'}/>*/}
      {/*</div>*/}

      {/*<Form style={{display: 'flex', flexDirection: 'column'}}>*/}
      {/*  <Form.TextInput disabled={false}/>*/}
      {/*  <Form.TextInput disabled={false}/>*/}
      {/*  /!*<Button size={'small'} text={'Отправить'}/>*!/*/}
      {/*  /!*<Button size={'medium'} text={'Ключ на старт'}/>*!/*/}
      {/*  /!*<Button size={'medium'} reversed text={'Ключ на старт'}/>*!/*/}
      {/*  /!*<Button size={'small'} reversed text={'Скачать бриф'}/>*!/*/}
      {/*</Form>*/}

      <div style={{paddingTop: 64, width: '100%', paddingBottom: 64}}>
        <Form style={{display: 'flex', flexDirection: 'row', flex: 1, gap: '20px'}}>
          <div style={{display: "flex", flexDirection: 'column', width: '100%'}}>
            <div style={{display: 'flex', marginBottom: '35px'}}>
              <Form.TextInput placeholder={'Введите имя...'} />
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '20px'}}>
              <Button size={'small'} reversed text={'Прикрепить ТЗ'} />
              <Button size={'small'} reversed text={'Скачать бриф '} />
            </div>
          </div>
          <div style={{display: "flex", flexDirection: 'column', width: '100%'}}>
            <div style={{display: 'flex', marginBottom: '16px'}}>
              <Form.TextInput placeholder={'Введите номер...'} />
            </div>
            <div style={{display: 'flex'}}>
              <Button style={{paddingTop: '24px', paddingBottom: '24px', borderRadius: '60px'}} size={'small'} text={'Прикрепить ТЗ'} />
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default IndexPage
