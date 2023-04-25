import { createContext, useReducer } from 'react';

const initialState = {
  text: '',
  keywords: '',
  isOpen: false,
  loading: false,
};

const ExtractKeywordsContext = createContext({
  text: '',
  keywords: '',
  isOpen: false,
  loading: false,
  extractKeywords: text => text,
  closeModal: () => {},
});

const extractKeywordsReducer = (state, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return {
        ...state,
        loading: true,
        isOpen: true,
      };
    case 'EXTRACT_KEYWORDS':
      return {
        ...state,
        loading: false,
        keywords: action.payload,
        isOpen: state.isOpen,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isOpen: false,
        text: '',
      };
    default:
      return { ...state };
  }
};

const ExtractKeywordsProvider = props => {
  const [state, dispatch] = useReducer(extractKeywordsReducer, initialState);

  console.log('Extract Keywords Context State: ', state);

  const extractKeywords = async text => {
    dispatch({ type: 'IS_LOADING' });

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_KEYWORD_EXTRACTOR_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt:
          'Extract keywords from this text. Make the first letter of each word uppercase and separate with commas\n\n' +
          text +
          '',
        temperature: 0.5,
        max_tokens: 60,
        frequency_penalty: 0.8,
      }),
    };

    const response = await fetch(
      process.env.REACT_APP_OPEN_AI_KEYWORD_EXTRACTOR_API_URL,
      options
    );
    const json = await response.json();

    const data = json.choices[0].text.trim();

    dispatch({ type: 'EXTRACT_KEYWORDS', payload: data });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <ExtractKeywordsContext.Provider
      value={{
        text: state.text,
        keywords: state.keywords,
        isOpen: state.isOpen,
        loading: state.loading,
        extractKeywords,
        closeModal,
      }}
      {...props}
    />
  );
};

export { ExtractKeywordsContext, ExtractKeywordsProvider };
