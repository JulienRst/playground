import Routes from 'business/router/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import Div from 'technical/type/div';
import Button from 'ui/button';

interface AboutMeButtonProps extends Div<HTMLButtonElement> {}
const AboutMeButton: React.FC<AboutMeButtonProps> = (props) => {
  return (
    <Link to={Routes.AboutMe}>
      <Button {...props}>About Me</Button>
    </Link>
  );
};

export default AboutMeButton;
