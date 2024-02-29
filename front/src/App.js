import Header from "./component/Headers";
import MenuBar from "./component/MenuBar";
import Launcher from "./component/Launcher";
import Zip from "./component/Zip";
import Movie from "./component/Movie";
import Music from "./component/Music";
import Letters from "./component/Letters";
import './App.css';
import { useState } from "react";

function App() {
  const [musicNumber, setMusicNumber] = useState(0);
  const [isLauncherVisible, setIsLauncherVisible] = useState(true);

  const [isZipVisible, setIsZipVisible] = useState(false);
  const [isLettersVisible, setIsLettersVisible] = useState(false);
  const [isMusicVisible, setIsMusicVisible] = useState(true);
  const [isMovieVisible, setIsMovieVisible] = useState(false);
  
  const handleDoubleClick = (menu) => {
    switch (menu) {
      case "zip":
        setIsZipVisible(true);
        break;
      case "going":
        break;
      case "music":
        setIsMusicVisible(true);
        break;
      case "movie":
        setIsMovieVisible(true);
        break;
      case "launcher":
        setIsLauncherVisible(true);
        break;
      case "letters":
        setIsLettersVisible(true);
        break;
      default:
        break;
    }
  };
  

  const onHideLauncher = () => {
    setIsLauncherVisible(false);
  };
  const onHideZip = () => {
    setIsZipVisible(false);
  };
  const onHideLetters = () => {
    setIsLettersVisible(false);
  };
  const onHideMusic = () => {
    setIsMusicVisible(false);
  };
  const onHideMovie = () => {
    setIsMovieVisible(false);
  };
  const toggleZipVisibility = () => {
    if(isZipVisible === false){
      setIsZipVisible(!isZipVisible);
    }
  };

  const toggleLettersVisibility = () => {
    if(isLettersVisible === false){
      setIsLettersVisible(!isLettersVisible);
    }
  };

  return (
    <div className="App">
      <Header />
      <MenuBar handleDoubleClick={handleDoubleClick}/>
      {isLauncherVisible && <Launcher onZipClick={toggleZipVisibility} onLettersClick={toggleLettersVisibility} onHide={onHideLauncher} />}
      {isZipVisible && <Zip onHide={onHideZip} />}
      {isMovieVisible && <Movie onHide={onHideMovie} />}
      {isMusicVisible && <Music props={{musicNumber,setMusicNumber}} onHide={onHideMusic} />}
      {isLettersVisible && <Letters onHide={onHideLetters} />}
    </div>
  );
}

export default App;
