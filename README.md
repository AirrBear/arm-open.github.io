# arm-open.github.io

[![Build Status](https://travis-ci.org/ARM-open/arm-open.github.io.svg?branch=master)](https://travis-ci.org/ARM-open/arm-open.github.io) [![Code Climate](https://codeclimate.com/github/ARM-open/arm-open.github.io/badges/gpa.svg)](https://codeclimate.com/github/ARM-open/arm-open.github.io)

This is the public website for Archangel Raphael's Mission, open sourced in the spirit of transparency as a charitable organization in support of the FOSS community.

We have a [small CLA](https://cla-assistant.io/ARM-open/arm-open.github.io) for anyone interested in contributing which is very similar to the Apache Foundations CLA, and are happy to give credit all contributors.


<!-- TODO add table of contents -->

## Requirements
- Python 3 +
- Flask
- Stripe
- Bower

## Usage

Make sure to export some environment variables that `server.py` will need to run.
```
bash setup-env.sh
```

Make sure you install some other dependencies
```
pip install -r requirements.txt
yarn install
```

Then you can simply run the server and navigate to http://localhost:5000


```
python server.py
```

## Deploying to Heroku
```
you're going to want to make sure to set the buildpacks properly for heroku.

We set the nodejs buildpack first to get package.json installed, then the python buildpack to run the application

heroku buildpacks:set heroku/nodejs --remote YOUR_APP_NAME
heroku buildpacks:add heroku/python --remote YOUR_APP_NAME
```

## Style Guides
We follow the [pep8 python specification](https://www.python.org/dev/peps/pep-0008/).


### License
This project uses the GNU GPL v3 license.

### Credits
This starting template is the Codyhouse 3D folding panel.

Articles on CodyHouse
- [here](https://codyhouse.co/gem/secondary-sliding-navigation/)
- [here](https://codyhouse.co/gem/3d-folding-panel/)
