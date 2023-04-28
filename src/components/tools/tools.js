import './index.less';
import React, { useState } from 'react';
import { Row, Col, Button, Input, Typography, Menu } from 'antd';
const { TextArea } = Input;
const { Title } = Typography;
const { SubMenu } = Menu;

const PrintBackSlashN = () => {
  const [inputStr, setInputStr] = useState('aa\nbb\n');
  const [outputStr, setOutputStr] = useState('aa\\nbb\\n');

  const show = () => {
    let str = inputStr;
    // replace \n to \\n in str
    str = str.replace(/\n/g, '\\n');
    str = str.replace(/\t/g, '\\t');
    setOutputStr(str);
  }

  const onInput = (e) => {
    setInputStr(e.target.value);
  }

  const onOutput = (e) => {
    setOutputStr(e.target.value);
  }

  const remove = () => {
    let str = outputStr;
    // let inputstr could print \n 
    // so remove \\n in str
    str = str.replace(/\\n/g, '\n');
    str = str.replace(/\\t/g, '\n');
    setInputStr(str);
  }

  return (
    <div>
      <Row>
        <Title level={4}> print \n\t </Title>
      </Row>
      <Row>
        <Col span={12}>
          <Row>
            <Col span={6}>
              <Button type="primary" onClick={show}>show \n\t</Button>
            </Col>
          </Row>
          <Row>
            <TextArea value={inputStr} autosize={true} onChange={onInput} />
          </Row>
        </Col>
        {/* <Col span={1}></Col> */}
        <Col span={12} style={{ paddingLeft: '5px', paddingRight: '5px' }}>
          <Row>
            <Button onClick={remove}>remove \n\t</Button>
          </Row>
          <Row>
            <TextArea value={outputStr} autosize={true} onChange={onOutput} />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

const EncodeURITool = () => {
    const [inputStr, setInputStr] = useState('https://www.example.com/foo bar?baz=qux#quux');
  const [outputStr, setOutputStr] = useState('');

  const show = () => {
    setOutputStr(encodeURI(inputStr));
  }

  const onInput = (e) => {
    setInputStr(e.target.value);
  }

  const onOutput = (e) => {
    setOutputStr(e.target.value);
  }

  const remove = () => {
    setInputStr(decodeURI(outputStr));
  }

  return (
    <div>
      <Row>
        <Title level={4}> Encode/Decode URI </Title>
      </Row>
      <Row>
        <Col span={12}>
          <Row>
            <Col span={6}>
              <Button type="primary" onClick={show}>Encode</Button>
            </Col>
          </Row>
          <Row>
            <TextArea value={inputStr} autosize={true} onChange={onInput} />
          </Row>
        </Col>
        <Col span={12} style={{ paddingLeft: '5px', paddingRight: '5px' }}>
          <Row>
            <Button onClick={remove}>Decode</Button>
          </Row>
          <Row>
            <TextArea value={outputStr} autosize={true} onChange={onOutput} />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

const NullTool = () => {
  return (
    <div></div>
  )
}

const Tools = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const components = [null, <PrintBackSlashN />, <EncodeURITool />, <NullTool />];

  const onMenuClick = (e) => {
    setActiveComponent(e.key);
  }

  return (
    <div>
      <Row>
        <Col span={3} style={{ padding: '5px' }}>
          <Title level={4}>Menu</Title>
          <Menu
            onClick={onMenuClick}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <span>Text Tools</span>
                </span>
              }
            >
              <Menu.Item key="1">print \n\t</Menu.Item>
              <Menu.Item key="2">encode URI</Menu.Item>
              <Menu.Item key="3">Null</Menu.Item>
            </SubMenu>
          </Menu>
        </Col>
        <Col span={21}>
          {components[activeComponent]}
        </Col>
      </Row>
    </div>
  );
}

export default Tools;
