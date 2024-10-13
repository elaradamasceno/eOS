function useApps() {
  //jogar os apps em um mock com intenção de consumir de alguma api

  const onGetAllApps = () => {
    console.log('aqui');
  };

  const onGetFooterApps = () => {};

  return {
    onGetAllApps,
  };
}

export default useApps;
