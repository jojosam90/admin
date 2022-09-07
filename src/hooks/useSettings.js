import { useContext } from 'react';
import SettingsContext from '../contexts/SettingsContext';

export default function useSettings() {
  const context = useContext(SettingsContext);

  return context;
}
