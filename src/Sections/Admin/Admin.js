import './Admin.css'

import React, { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import './Admin.css';

function Admin() {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);
  const [teacherTitle, setTeacherTitle] = useState('');
  const [image, setImage] = useState('');

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('image', file[0]);

    try {
      const response = await axios.post('YOUR_UPLOAD_API_URL', formData);
      setImage(response.data.imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <h1 style ={ {alignItems : 'center'} }>Admin Page</h1>
      <TextField
        label="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Prénom"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Adresse mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Mot de passe"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        control={
          <Checkbox checked={isTeacher} onChange={() => setIsTeacher(!isTeacher)} color="primary" />
        }
        label="Enseignant"
      />
      {isTeacher && (
        <TextField
          label="Titre de l'enseignant"
          value={teacherTitle}
          onChange={(e) => setTeacherTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
      )}

      <div className="dropzone-wrapper">
        <Dropzone onDrop={handleImageUpload} accept="image/*">
          {({ getRootProps, getInputProps }) => (
            <div className="dropzone" {...getRootProps()}>
              <input {...getInputProps()} />
              {image ? (
                <img src={image} alt="Uploaded" style={{ width: '150px', height: '150px' }} />
              ) : (
                <p>Glisser-déposer ou cliquer pour ajouter une image.</p>
              )}
            </div>
          )}
        </Dropzone>
      </div>

      <div className="image-preview">
        {image && (
          <>
            <h2>Image Uploadée</h2>
            <img src={image} alt="Uploaded" style={{ width: '100%', marginTop: '10px' }} />
          </>
        )}
      </div>

      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Enregistrer
      </Button>
    </div>
  );
}

export default Admin;

