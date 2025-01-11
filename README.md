# Social Media Performance Analysis

An basic analytics module utilizing Langflow and DataStax to analyze engagement data from mock social media accounts and Streamlit-based web application that allows users to interact with a flow generated by LangFlow for social media performance analysis.

## Used Tools:
● DataStax Astra DB for database operations.

● Langflow for workflow creation and GPT integration.

● Streamlit for frontend access of Langflow.

## Features

- Powered by **LangFlow** and **DataStax** for robust and accurate analysis.
- Interactive chat interface for social media performance analysis.
- Persistent query and response history using Streamlit's `session_state`.
- Easy-to-use interface with real-time insights from LangFlow.

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Sujalbagavan/simplify-360
cd simplify-360
```



### 3. Install Dependencies
Install the required react libraries:

```bash
npm install
```
### 4. Create a .env File
Create a .env file in the root directory of your project and add the following:

dotenv
```
APP_TOKEN=<your-langflow-generated-token>
```
Replace <your-langflow-generated-token> with the API token generated by LangFlow.

### 5. Run the Application
npm run dev

copy the url and paste in the browser

## How to Use
1)u will see the main page of our application\
2)scroll and u will get there features 
3)click on the each feature and test it 

## Project Structure
- app.py: Main application file containing the Streamlit app logic.
- requirements.txt: List of dependencies required for the project.
- .env: File for storing environment variables securely.
- .project :contain the frontend application 



## Notes
Ensure you have a valid LangFlow APP_TOKEN before running the application.

The API token is stored securely in the .env file and accessed through python-dotenv.
