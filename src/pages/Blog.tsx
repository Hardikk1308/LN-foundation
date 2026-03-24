import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "The Critical Importance of Maternal Healthcare During the First Trimester",
      category: "Maternal Health",
      date: "Oct 12, 2026",
      author: "Dr. Ananya Sharma",
      image: "/assets/images/hero_mothers_kids_health_1773512201492.png",
      excerpt: "Understanding why the first three months are the most crucial for fetal development and maternal safety in rural settings."
    },
    {
      id: 2,
      title: "Preventing Diabetes in Rural Communities: A Step-by-Step Approach",
      category: "Preventive Care",
      date: "Oct 05, 2026",
      author: "Rahul Verma, Health Champion",
      image: "/assets/images/preventive_diabetes_1773512265544.png",
      excerpt: "How dietary shifts and early screening are combatting the silent rise of Type-II Diabetes across Indian villages."
    },
    {
      id: 3,
      title: "Why Institutional Delivery is Essential for Reducing MMR",
      category: "Maternal Health",
      date: "Sep 28, 2026",
      author: "Lumenova Editorial",
      image: "/assets/images/maternal_health_group.png",
      excerpt: "Moving away from high-risk home births to fully equipped health centers is fundamental in improving the Maternal Mortality Ratio."
    },
    {
      id: 4,
      title: "The Power of Youth in Public Health Awareness",
      category: "Community Education",
      date: "Sep 15, 2026",
      author: "Priya Desai",
      image: "/assets/images/youth_volunteers_lumenova.png",
      excerpt: "How our Health Champions program is transforming enthusiastic youth into frontline warriors for public hygiene and nutrition."
    }
  ];

  return (
    <div className="page animate-fade-in" style={{ paddingTop: '80px' }}>
      <section className="page-header" style={{
        background: 'var(--surface-alt)',
        padding: '5rem 0 3rem',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 className="title" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Health Awareness Blog</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', color: 'var(--text-body)' }}>
            Insights, educational articles, and stories from the frontline of rural community healthcare in India.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {articles.map(article => (
              <div key={article.id} className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'var(--transition)' }}>
                <div style={{ height: '250px', overflow: 'hidden' }}>
                  <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="blog-img" />
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>{article.category}</span>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>{article.title}</h3>
                  <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-body)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={16} /> {article.date}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><User size={16} /> {article.author}</span>
                  </div>
                  <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', flexGrow: 1 }}>{article.excerpt}</p>
                  <Link to="#" className="program-link" style={{ marginTop: 'auto' }}>Read Full Article <ArrowRight size={16}/></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .glass-panel:hover .blog-img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Blog;
