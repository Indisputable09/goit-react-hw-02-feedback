import { GlobalStyle } from 'components/GlobalStyle';
import Feedback from "./Feedback";

export const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Feedback/>
    </div>
  );
};

// style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template