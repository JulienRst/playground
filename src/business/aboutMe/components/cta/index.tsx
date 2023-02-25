import React from 'react';
import Div from 'technical/type/div';
import Button from 'ui/button';

interface AboutMeButtonProps extends Div<HTMLButtonElement> {}
const AboutMeButton: React.FC<AboutMeButtonProps> = (props) => {
  return <Button {...props}>About Me</Button>;
};

export default AboutMeButton;
