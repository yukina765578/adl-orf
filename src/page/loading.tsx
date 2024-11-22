import { useState, useEffect} from 'react'
import { Box, Image } from '@chakra-ui/react'
import ADLLogo from 'image/ADLLogo.png'
import ErikaLabLogo from 'image/ErikaLabLogo.png'
import { fetchModalContents } from 'notion/api';

interface LoadingProps {
  setData: React.Dispatch<React.SetStateAction<any>>;
}

const Loading: React.FC<LoadingProps> = ({ setData }) => {
    const [loading, setLoading] = useState<boolean>(true);

    const loadingBox = {
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        flexDirection: 'column',
        zIndex: 999,
        opacity: loading ? 1 : 0,
        transition: 'opacity 1s ease-out',
        pointerEvents: loading ? 'auto' : 'none'
    }
    useEffect(() => {
      console.log('loading')
      const loadNotionData = async () => {
        try{
          const data = await fetchModalContents();
          setData(data);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
      loadNotionData();
    }, [setData])
    return(
        <Box sx={loadingBox}>
            <Image boxSize="160px" src={ADLLogo}/>
            <Image boxSize="160px" src={ErikaLabLogo} objectFit="contain" />
        </Box>
    )
}

export default Loading
