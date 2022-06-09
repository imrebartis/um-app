import * as React from 'react';
import '../style.css';
import { Country } from '../types/types';
import Header from './Header';
import PageHeading from './PageHeading';
import Countries from './Countries';
import Continents from './Continents';
import AppContext from '../context/AppContext';
import { ThemeProvider } from '@mui/material';
import { theme } from '../themes/LightTheme';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  main: {
    maxWidth: '35rem',
    '@media screen and (min-width: 900px)': {
      maxWidth: '50rem',
    },
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default function Main() {
  const classes = useStyles();
  const [continents, setContinents] = React.useState([]);
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  const {
    state: { continentName },
  } = React.useContext(AppContext);

  const fetchCountries = async () => {
    try {
      const url =
        'https://cdn.utopiamusic.com/code-test/frontend/countries.json';
      const response = await fetch(url);
      console.log(response.status);
      const data = (await response.json()) as Country[];
      if (response.status === 200) {
        if (data.length > 0) {
          renderContinentNames(data);
          if (Boolean(continentName)) {
            const filteredData = getFilteredData(data);
            setCountries(filteredData);
          } else {
            setCountries(data);
          }
          setLoading(false);
        }
      }
    } catch (error) {
      console.error(error);
      setError('network error');
    }
  };

  const renderContinentNames = (data) => {
    const continentsData = data.map((data) => data.continent);
    const uniqueContinentNames = [...new Set(continentsData)];
    const sortedUniqueContinentNames = uniqueContinentNames.sort();
    setContinents(sortedUniqueContinentNames);
  };

  const getFilteredData = (data) => {
    return data.filter((d) => d.continent.toLowerCase() === continentName);
  };

  React.useEffect(() => {
    fetchCountries();
  }, [continentName]);

  return (
    <div>
      <Header />
      <ThemeProvider theme={theme}>
        <main className={classes.main}>
          <PageHeading />
          <Continents loading={loading} error={error} continents={continents} />
          <Countries loading={loading} error={error} countries={countries} />
        </main>
      </ThemeProvider>
    </div>
  );
}