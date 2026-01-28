import { useState } from 'react';
import { useStore } from './store/useStore';
import { Layout } from './components/layout/Layout';
import { SplashScreen } from './pages/SplashScreen';
import { Onboarding } from './pages/Onboarding';
import { Dashboard } from './pages/Dashboard';
import { AddPlant } from './pages/AddPlant';
import { IdentifyPlant } from './pages/IdentifyPlant';
import { PlantDetail } from './pages/PlantDetail';
import { Calendar } from './pages/Calendar';
import { Profile } from './pages/Profile';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedPlant, setSelectedPlant] = useState(null);
  const hasCompletedOnboarding = useStore((state) => state.hasCompletedOnboarding);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  if (!hasCompletedOnboarding) {
    return <Onboarding />;
  }

  const handlePlantClick = (plant) => {
    setSelectedPlant(plant);
    setActiveTab('detail');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard onPlantClick={handlePlantClick} />;
      case 'search':
        return <AddPlant onBack={() => setActiveTab('home')} onScan={() => setActiveTab('identify')} />;
      case 'identify':
        return <IdentifyPlant onBack={() => setActiveTab('search')} onIdentify={(plant) => { console.log(plant); setActiveTab('home'); }} />;
      case 'detail':
        return <PlantDetail plant={selectedPlant} onBack={() => setActiveTab('home')} />;
      case 'calendar':
        return <Calendar />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard onPlantClick={handlePlantClick} />;
    }
  };

  return (
    <Layout activeTab={activeTab === 'identify' || activeTab === 'detail' ? 'home' : activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}

export default App;
