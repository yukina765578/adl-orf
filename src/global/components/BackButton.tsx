import { IconButton } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavigationLeft } from "./NavigationLeft";

interface backButtonProps {
    headerHeight: number
}

const BackButton: React.FC<backButtonProps> = ({headerHeight}) => {
    const navigate = useNavigate();
    const location  = useLocation();
    const handleOnClick = () => {
        navigate('/adl-orf')
    }
    if (location.pathname !== '/adl-orf') {
        return (
            <IconButton
                onClick={handleOnClick}
                variant="unstyled"
                aria-label='Back'
                icon={<NavigationLeft />}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    left: "0px",
                    top: headerHeight,
                    zIndex: 10
                }}
            >
                Back to home
            </IconButton>
        );
    } else {
        return null; // Don't render the BackButton when in the home route ('/')
    }
}

export default BackButton
