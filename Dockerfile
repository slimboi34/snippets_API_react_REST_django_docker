FROM amd64/python:3.10-slim



ENV PYTHONUNBUFFERED 1

RUN apt-get update && \
    apt-get -y install postgresql-client


RUN apt install -y curl jq httpie

RUN pip install --upgrade pip


WORKDIR /app 

COPY requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

CMD ["python", "manage.py", "runserver", "0.0.0.0:8093"]



