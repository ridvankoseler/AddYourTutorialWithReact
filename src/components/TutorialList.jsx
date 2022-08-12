import React ,{useState} from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import EditTutorial from "./EditTutorial";


const TutorialList = ({ tutorials, deleteTutorial, editTutorial }) => {
  const [editItem, setEditItem] = useState("")
  return (
    <div className='container mt-4'>
      <table className='table caption-top'>
        <thead>
          <tr>
            <th scope='col'>#id</th>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Edit</th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <th>{title}</th>
                <th>{description}</th>
                <td className="text-center text-nowrap">
                  <FaEdit
                    data-bs-toggle='modal'
                    data-bs-target='#edit-modal'
                    //burdaki id editTuorial içindeki ile aynı olacak bunu da bootstrap den alıyoruz.
                    onClick={() => setEditItem(item)}
                    size={20}
                    className='text-warning me-2 cursor-pointer'
                  />
                  <AiFillDelete
                    onClick={() => deleteTutorial(id)}
                    size={20}
                    className='text-danger cursor-pointer'
                  />
                  {/* aynı süslü içinde olduğumuz için delete içine id parametresini göndermemiz gerekiyor.e.target yapmamıza gerek yok */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial editTutorial={editTutorial} editItem={editItem} />
    </div>
  );
};

export default TutorialList;
