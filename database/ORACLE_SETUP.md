# Oracle setup

The backend uses Spring Data JPA. Hibernate is configured to update the schema automatically.

Default connection URL:
`jdbc:oracle:thin:@//localhost:1522/orcldeee`

Adjust it to match your Oracle listener and service name. Set the environment variables:
- `SPRING_DATASOURCE_USERNAME`
- `SPRING_DATASOURCE_PASSWORD`
- optionally `SPRING_DATASOURCE_URL`

Do not store actual credentials in source control.
