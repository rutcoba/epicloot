import React from 'react';

function NotFound() {
    return (
      <section id="not_found" className="screen-section">      
        <p className="main-text"><i className="material-icons">error_outline</i> Не найдено</p>
        <p className="main-text">Вероятно, битая ссылка</p>
        <p className="main-text">Вы можете попробовать вернуться на главную и нажать на пункт меню</p>
      </section>
    );
}

export default NotFound;