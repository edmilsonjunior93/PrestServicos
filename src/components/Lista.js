const Prestadores = () => {
  const instState = [
    {
      nome: nome,
      cn: 'cn',
      email: 'email',
      celular: 'celular',
      endereco: 'endereco',
      especialidades: 'especialidades',
      anuncio: 'anuncio',
    },
  ];
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState('');
  const toast = useToast();

  const addItem = (title) => {
    if (title === '') {
      toast.show({
        title: 'Please Enter Text',
        status: 'warning',
      });
      return;
    }

    setList((prevList) => {
      return [
        ...prevList,
        {
          nome: nome,
          cn: cn,
          email: email,
          celular: celular,
          endereco: endereco,
          especialidades: especialidades,
          anuncio: anuncio,
        },
      ];
    });
  };

  const handleDelete = (index) => {
    setList((prevList) => {
      const temp = prevList.filter((_, itemI) => itemI !== index);
      return temp;
    });
  };
};
