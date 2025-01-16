<h1>CCMS all modules installation guide</h1>
Set Up MongoDB<br>
Install MongoDB: If you haven't already, you need to set up MongoDB.Use a cloud-managed MongoDB  MongoDB Atlas.<br>
<br>
Create a virtual environment:<br>
python -m venv venv <br>
.\venv\Scripts\activate<br>
<br>
And then install fatapi,uvicorn,pydantic<br>
pip install fastapi<br>
pip install uvicorn "[standard]"<br>
pip install motor<br>
check if pydantic not installed :<br>
pip install pydantic<br>
<br>
<br>
This is mongo atlas url<br>
<a href="https://cloud.mongodb.com/v2/677921906f72a04582ffe71b#/clusters"></a><br>
Create a cluster connect it with mongodb compass get the url that it provides for connection String<br>
Set up mongodb compass in ur laptop <br>
Copy the url and passwor paste it in connection string <br>
It will directly connect it with ur mongodb compass<br<>
<br>
<br>
and now copy url of mongodb atlas nd paste it in mongo_url with password<br>
DATABASE_NAME = "client_config_db"<br>
COLLECTION_NAME = "client_configurations"<br>
<br>
To start the FastAPI server, run:<br>
uvicorn app.main:app --reload<br>
<br>
Now in another terminal<br>
Create a New React App:<br>
npx create-react-app ccms-frontend<br>
cd ccms-frontend<br>
<br>
npm install axios react-router-dom react-bootstrap<br>
<br>
Finally, to run the React app:<br>
npm start<br>
<br>
