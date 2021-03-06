MANAGE=django-admin.py
ROOT_DIR=`pwd`

test: karma-test
	PYTHONPATH=`pwd` DJANGO_SETTINGS_MODULE=django_angular_backend.settings $(MANAGE) test app

run:
	. $(ROOT_DIR)/.env/bin/activate; PYTHONPATH=`pwd` DJANGO_SETTINGS_MODULE=django_angular_backend.settings $(MANAGE) runserver

syncdb:
	PYTHONPATH=`pwd` DJANGO_SETTINGS_MODULE=django_angular_backend.settings $(MANAGE) syncdb --noinput


install: bower-install
	virtualenv --no-site-packages .env
	. $(ROOT_DIR)/.env/bin/activate; pip install -r $(ROOT_DIR)/requirements.txt
	. $(ROOT_DIR)/.env/bin/activate; make syncdb

.PHONY: bower-install
bower-install:
	$(MAKE) -C django_angular_backend/static bower-install

.PHONY: karma-test
karma-test:
	$(MAKE) -C django_angular_backend/static karma-test
