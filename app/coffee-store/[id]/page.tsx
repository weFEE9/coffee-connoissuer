type props = {
  params: params;
};

type params = {
  id: string;
};

const CoffeeStore = ({ params }: props) => {
  return <div>Coffee Store: {params.id}</div>;
};

export default CoffeeStore;
