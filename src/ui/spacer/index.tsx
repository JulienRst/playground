import classnames from 'classnames';
import React from 'react';
import Div from 'technical/type/div';
import styles from './index.module.scss';

interface SpaceProps extends Div {
  direction?: 'vertical' | 'horizontal';
  size?:
    | 'extra-small'
    | 'small'
    | 'middle'
    | 'large'
    | 'no-space'
    | 'extra-large';
  align?: 'center' | 'start' | 'end' | 'baseline';
  justify?: 'start' | 'center' | 'space-around' | 'space-between' | 'end';
  grow?: boolean;
}

const Spacer: React.FC<SpaceProps> = ({
  children,
  direction = 'horizontal',
  size = 'middle',
  justify,
  align,
  grow,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={classnames(
        styles.spaceContainer,
        styles[direction],
        styles[`size-${size}`],
        align && styles[`align-${align}`],
        justify && styles[`justify-${justify}`],
        rest.className,
        {
          [styles.grow]: grow,
        },
      )}
    >
      {children}
    </div>
  );
};

export default Spacer;
