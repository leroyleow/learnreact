import { useState } from "react";

function NameForm() {

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        profession: ''
    });
    const [profiles, setProfile] = useState([]);

    function handleChange(event) {
        console.log("HandleChange", event);

        //destructure event.target
        const {name, value} = event.target;
        console.log(name, value);

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]:value
        }))

        console.log("FormData", formData);
    }

    function handleSubmit (event) {
        event.preventDefault();
        console.log("EVT::",event.target);
        // setNames([...names, name])
        // setName('');
        
        // if all are good
        if(formData.name && formData.profession && formData.age){
            setProfile([...profiles, formData]);
            setFormData({name:'',age:'',profession:''});
        }
        else{
            alert('Please fill in all fields');
        }

    }

    return <div className="mt-4">
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <input type="text" className="form-control" placeholder="Enter Your Name" 
                name="name"
                value={formData.name} 
                onChange={handleChange}></input>
            </div>
            <div className="form-group  mb-3">
                <input type="number" className="form-control" placeholder="Enter Age" 
                name="age"
                value={formData.age} 
                onChange={handleChange}></input>
            </div>
            <div className="form-group  mb-3">
                <input type="text" className="form-control" placeholder="Enter Profession" 
                name="profession"
                value={formData.profession} 
                onChange={handleChange}></input>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
            {profiles.map((profile, index)=>( 
                <div key={index} className="card mt-3">
                    <div  className="card-body">
                        <h5 className="card-title">{profile.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Age: {profile.age}</h6>
                        <p className="card-text">Profession: {profile.profession}</p>
                    </div>
                </div>
                ))
            }
    </div>
}

export default NameForm