export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624db88a6b20d63a61eaaf71',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-errtfpe5',
                  apiId: '6abac274-04bc-4eaf-a94d-5ee2515524e7'
                },
                {
                  buildHookId: '624db88a7bec0e506a8ef289',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-g9oapqfa',
                  apiId: 'bbcd8cf5-b67c-40f0-93c5-e14e82e418eb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hannah-eichelsdoerfer/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-g9oapqfa.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
