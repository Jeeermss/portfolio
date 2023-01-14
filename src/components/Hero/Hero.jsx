import { Grid, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import './hero.css';

import HeroImg from '../../assets/images/hero.png';
import LocationIcon from '../../assets/icons/Location.png';

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Hero = () => {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="center"
      spacing={{ xs: 1, sm: 2, md: 4 }}
      className="hero"
    >
      <Item className="hero__first-col">
        <h1 className="jm-typography heading-level-1 text-end">
          Jeremie <br /> Montero
        </h1>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <img
            src={LocationIcon}
            alt="born & raised in san francisco"
            style={{ marginRight: '8px' }}
          />
          <p className="jm-typography-2 body-1 text-start">
            BORN & RAISED IN
            <br /> SAN FRANCISCO
          </p>
        </div>
      </Item>

      <Item className="hero__second-col">
        <img src={HeroImg} alt="Hi, I'm Jeremie!" />
      </Item>

      <Item sx={{ alignSelf: 'flex-end' }} className="hero__third-col">
        <h2 className="jm-typography heading-level-1 text-start">
          Senior <br /> Product <br /> Designer
        </h2>
      </Item>
    </Stack>
  );
};

export default Hero;
