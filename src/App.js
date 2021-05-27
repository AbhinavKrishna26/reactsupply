import logo from './logo.svg';
import './App.css';
import ResponsiveDrawer from './Navbar'
import CustomizedInputBase from './Search'
import MapContainer from './map'
function App() {
  return (
    <div className="App">
        <CustomizedInputBase/>

      <div className="flex-container">
        <div className="Flex-Left">  
      <h3>Item Name:</h3>
      <h3>Transaction ID:</h3>
      <h3>Item Details:</h3>
        </div>
    <div className="Flex-Right">  <MapContainer/></div>
      </div>
    
      <ResponsiveDrawer/>
    </div>
  );
}

export default App;
