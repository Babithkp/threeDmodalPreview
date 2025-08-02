import "./App.css";
import ThreeSixty from "react-360-view";

function App() {
  return (
    <main>
      <ThreeSixty
        amount={36}
        imagePath="https://shreelnlogistics-bucket.s3.ap-south-1.amazonaws.com/Car-Images"
        fileName="car-{index}.png"
        spinReverse
        autoplay
      />
    </main>
  );
}

export default App;