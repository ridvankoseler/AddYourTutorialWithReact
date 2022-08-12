import React, { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";

const Home = () => {
  const [tutorials, setTutorials] = useState();

  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

  //?GET (READ)
  const getTutorials = async () => {
    try {
      const { data } = await axios.get(url);
      setTutorials(data);
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    getTutorials();
  }, []);

  console.log(tutorials);

  //?POST (Create)
  const addTutorial = async (tutorial) => {
    try {
      await axios.post(url, tutorial);
    } catch (error) {
      console.log("Error");
    }
    getTutorials();
  };

  //* DELETE(delete)
  const deleteTutorial = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log("Error");
    }
    getTutorials();
  };

  //! Uptade (PUT:Whole Uptade(hepsi Güncellenir), PATCH:Partially Uptade(parçalı yapılır))
  const editTutorial = async (id, title, desc) => {
    const filtered = tutorials
      .filter((tutor) => tutor.id === id)
      .map(() => ({ title: title, description: desc }));
    // burada filter ile seçtik map ile güncellemeyi yaptık map içinde return kullanmamak için paranteze aldık verileri tekrardan blok hale getirdik
    try {
      await axios.put(`${url}/${id}` , filtered[0]);
    } catch (error) {
      console.log("Error");
    }
    getTutorials();
  };

  return (
    <div>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList
        editTutorial={editTutorial}
        deleteTutorial={deleteTutorial}
        tutorials={tutorials}
      />
    </div>
  );
};

export default Home;
