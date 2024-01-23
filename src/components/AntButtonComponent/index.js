import React from 'react';
import { Button, Flex } from 'antd';
const ButtonComponent = () => (
  <Flex gap="small" wrap="wrap">
    <Button 
    style={{backgroundColor: 'blue'}}
     type="primary">Enter</Button>
    {/* <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button> */}
  </Flex>
);
export default ButtonComponent;