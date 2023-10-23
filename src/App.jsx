import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene';

export const App = () => {
	return (
		<div className='app'>
			<Canvas shadows camera={{position:[0,0,15],fov:20}}>
				<Scene />
			</Canvas>
		</div>
	)
}
