import React from "react";
import { useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";

const Loader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(True);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <BarLoader color={color} loading={loading} css={override} size={150} />
      ) : (
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          odio atque ex placeat cum velit ipsa, commodi laudantium beatae
          quaerat quae voluptas error modi quod et ab, perspiciatis ducimus
          consectetur?
        </div>
      )}
    </div>
  );
};

export default Loader;
