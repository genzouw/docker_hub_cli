#!/usr/bin/env node

const dockerHubAPI = require('docker-hub-api')

const setLoginToken = function(dockerHubAPI) {
  const token = process.env.DOCKER_HUB_LOGIN_TOKEN

  if (token) {
    dockerHubAPI.setLoginToken(token)
  }
}

const username = process.env.DOCKER_HUB_USERNAME

const subcommand = process.argv[2];

(async function() {
  switch (subcommand) {
    case 'create_repository':
      const reponame = process.argv[3]

      setLoginToken(dockerHubAPI)

      const response = await dockerHubAPI.createRepository(
          username,
          reponame,
          {
            description: "",
            full_description: "",
            is_private: false,
          },
      )

      response.dockerhub_url= `https://hub.docker.com/repository/docker/${username}/${reponame}`
      console.log(JSON.stringify(response))

      // dockerHubAPI.createAutomatedBuild(
      // username,
      // reponame,
      // {
      // "name": reponame,
      // // "namespace": "ryantheallmighty",
      // "description": "hoge",
      // "vcs_repo_name": `${username}/${reponame}`,
      // "provider": "github",
      // "dockerhub_repo_name": `${username}/${reponame}`,
      // // "is_private": false,
      // "is_public": true,
      // "active": true,
      // "github_token": process.env.GITHUB_API_TOKEN,
      // "build_tags": [
      // {
      // "name": "latest",
      // "source_type": "Branch",
      // "source_name": "master",
      // "dockerfile_location": "/",
      // },
      // {
      // "name": "{\\1}",
      // "source_type": "Tag",
      // "source_name": "/^v([0-9.]+)$/",
      // "dockerfile_location": "/",
      // },
      // ],
      // },
      // )
      break
    case 'login':
      dockerHubAPI.login(
          username,
          process.env.DOCKER_HUB_PASSWORD,
      ).then(function(info) {
        const credential = {
          DOCKER_HUB_LOGIN_TOKEN: info.token,
          DOCKER_HUB_USERNAME: username,
        }

        console.log(JSON.stringify(credential))
      })
      break
    default:
      break
  }
})()

