import {
	Grid
} from '@mui/material';
import './hero.css';

import HeroImg from '../../assets/images/hero.png';
import LocationIcon from '../../assets/icons/Location.png';

const Hero = () => {
	return <div className="hero">
		<Grid container className="hero-img" sx={{ marginBottom: '64px' }}>
			<Grid item xs={12} className="hero-img">
				<img src={HeroImg} alt="Hi, I'm Jeremie!" />
			</Grid>
		</Grid>

		<Grid container alignItems='center'>
			<Grid item xs={8}>
				<h1 className="jm-typography heading-level-1">Jeremie Montero</h1>
			</Grid>
			<Grid item xs={4}>
				<Grid container>
					<Grid item xs={2}>
						<img src={LocationIcon} alt='born & raised in san francisco' />
					</Grid>
					<Grid item xs={10}>
						<p className='jm-typography body-1'>Born & raised in<br /> San Francisco</p>
					</Grid>
				</Grid>
			</Grid>
		</Grid>

		<Grid container sx={{ textAlign: 'center' }}>
			<Grid item xs={12}>
				<h2 className='jm-typography heading-level-1'>Senior Product Designer</h2>
			</Grid>
		</Grid>
	</div>
}

export default Hero;