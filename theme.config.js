import Cusdis from 'nextra-theme-blog/cusdis'

const YEAR = new Date().getFullYear()

export default {
  comments: <Cusdis />,
  components: {
    p: props => {
      const maybeFin = ['FIN.', 'END.'].includes(props.children);
      const className = maybeFin ? 'k-fin' : null;
      return <p className={className} {...props}></p>;
    },
  },
  cusdis: {
    appId: '02edf755-58d7-4d18-823b-56f347e2fc38'
  },
  footer: (
    <footer>
      <small style={{ display: 'block', marginTop: '1rem' }}>
        <time>{YEAR}</time> © Abdeldjalil Hebal.
        <a hidden href="/feed.xml">RSS</a>
        <style jsx>{`
          a {
            float: right;
          }
          @media screen and (max-width: 480px) {
            article {
              padding-top: 2rem;
              padding-bottom: 4rem;
            }
          }
        `}</style>
      </small>
    </footer>
  )
}
