from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "API is healthy"}

@app.get("/test_data")
def get_test_data():
    return {"data": [1, 2, 3, 4, 5], "message": "Sample test data"}
