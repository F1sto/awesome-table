import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="page-wrapper">
    <div class="card filters">
        <h3>Filters here</h3>
        <div>
            <input type="text">
            <input type="text">
            <input type="text">           
        </div>
    </div>
    
    <div class="card"> 
        <div class="table">
            <div class="t-head">
                <div class="col col-1 sticky t-card">
                    <p>Наименование операции</p>
                    <p>1</p>
                </div>
                
                <div class="col col-2 sticky t-card">
                    <span>Срок уплаты</span>
                    <p>2</p>
                </div>
                
                <div class="multi-head">
                    <div class="multi-head__title t-card">Расчеты по налогам</div>
                    
                    <div class="multi-head__body">
                        <div class="col col-3 t-card">
                            <div>Начислино уменьшино</div> 
                            <p>3</p>
                        </div>
                        
                        <div class="col col-4 t-card">
                            <div>Уплачено возвращено</div> 
                            <p>4</p>
                        </div>
                        
                        <div class="col col-5 t-card">
                            <div>Сальдо белого мотылька</div> 
                            <p>5</p>
                        </div>
                    </div>
                </div>
                
                 <div class="t-card multi-head">
                    <div class="multi-head__title t-card">Расчеты по жалобам, банкротам, уведомлениям</div>
                    
                    <div class="multi-head__body">
                        <div>
                            <div class="multi-head__title t-card">Начислино налога, пени, налоговые санкции</div>
                            
                            <div class="multi-head__body">
                                <div class="col col-6 t-card">
                                    <span>налога</span>
                                    <div class="t-card">6</div> 
                                </div>
                                
                                <div class="col col-7 t-card">
                                    <span>пени</span>
                                    <div class="t-card">7</div>
                                </div>
    
                                <div class="col col-8 t-card">
                                    <span>налоговые санкции</span>
                                    <div class="t-card">8</div>
                                </div>
                            </div>
                        </div>

                         <div class="col col-9 t-card">
                            <span>Сальдо (+), (-)</span>
                            <div class="t-card">9</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="t-body">
                <div class="row">
                    <div class="col col-1 sticky t-card"><span>first bla-bla Расчеты по жалобам, банкротам, уведомлениям a lot of text here</span></div>
                    <div class="col col-2 sticky t-card"><span>first</span></div>
                    <div class="col col-3 t-card"><span>first</span></div>
                    <div class="col col-4 t-card"><span>first</span></div>
                    <div class="col col-5 t-card"><span>first</span></div>
                    <div class="col col-6 t-card"><span>first</span></div>
                    <div class="col col-7 t-card"><span>first</span></div>
                    <div class="col col-8 t-card"><span>first</span></div>
                    <div class="col col-9 t-card"><span>first</span></div>                    
                </div>
                
                <div class="row">
                    <div class="col col-1 sticky t-card"><span>first</span></div>
                    <div class="col col-2 sticky t-card"><span>first</span></div>
                    <div class="col col-3 t-card"><span>first</span></div>
                    <div class="col col-4 t-card"><span>first</span></div>
                    <div class="col col-5 t-card"><span>first</span></div>
                    <div class="col col-6 t-card"><span>first</span></div>
                    <div class="col col-7 t-card"><span>first</span></div>
                    <div class="col col-8 t-card"><span>first</span></div>
                    <div class="col col-9 t-card"><span>first</span></div>
                </div>
                
                 <div class="row">
                    <div class="col col-1 sticky t-card"><span>first</span></div>
                    <div class="col col-2 sticky t-card"><span>first</span></div>
                    <div class="col col-3 t-card"><span>first</span></div>
                    <div class="col col-4 t-card"><span>first bla-bla Расчеты по жалобам, банкротам, уведомлениям a lot of text here</span></div>
                    <div class="col col-5 t-card"><span>first</span></div>
                    <div class="col col-6 t-card"><span>first</span></div>
                    <div class="col col-7 t-card"><span>first</span></div>
                    <div class="col col-8 t-card"><span>first</span></div>
                    <div class="col col-9 t-card"><span>first</span></div>
                </div>
                
                  <div class="row">
                    <div class="col col-1 sticky t-card"><span>first</span></div>
                    <div class="col col-2 sticky t-card"><span>first</span></div>
                    <div class="col col-3 t-card"><span>first</span></div>
                    <div class="col col-4 t-card"><span>first</span></div>
                    <div class="col col-5 t-card"><span>first</span></div>
                    <div class="col col-6 t-card"><span>first</span></div>
                    <div class="col col-7 t-card"><span>first</span></div>
                    <div class="col col-8 t-card"><span>first</span></div>
                    <div class="col col-9 t-card"><span>first</span></div>
                </div>
                
                  <div class="row">
                    <div class="col col-1 sticky t-card"><span>first</span></div>
                    <div class="col col-2 sticky t-card"><span>first</span></div>
                    <div class="col col-3 t-card"><span>first</span></div>
                    <div class="col col-4 t-card"><span>first</span></div>
                    <div class="col col-5 t-card"><span>first</span></div>
                    <div class="col col-6 t-card"><span>first</span></div>
                    <div class="col col-7 t-card"><span>first</span></div>
                    <div class="col col-8 t-card"><span>first</span></div>
                    <div class="col col-9 t-card"><span>first</span></div>
                </div>
                
                  <div class="row">
                    <div class="col col-1 sticky t-card"><span>first</span></div>
                    <div class="col col-2 sticky t-card"><span>first</span></div>
                    <div class="col col-3 t-card"><span>first</span></div>
                    <div class="col col-4 t-card"><span>first</span></div>
                    <div class="col col-5 t-card"><span>first</span></div>
                    <div class="col col-6 t-card"><span>first</span></div>
                    <div class="col col-7 t-card"><span>first</span></div>
                    <div class="col col-8 t-card"><span>first</span></div>
                    <div class="col col-9 t-card"><span>first</span></div>
                </div>
                
                  <div class="row">
                    <div class="col col-1 sticky t-card"><span>first</span></div>
                    <div class="col col-2 sticky t-card"><span>first</span></div>
                    <div class="col col-3 t-card"><span>first</span></div>
                    <div class="col col-4 t-card"><span>first</span></div>
                    <div class="col col-5 t-card"><span>first</span></div>
                    <div class="col col-6 t-card"><span>first</span></div>
                    <div class="col col-7 t-card"><span>first</span></div>
                    <div class="col col-8 t-card"><span>first</span></div>
                    <div class="col col-9 t-card"><span>first</span></div>
                </div>
                
                  <div class="row">
                    <div class="col col-1 sticky t-card"><span>first</span></div>
                    <div class="col col-2 sticky t-card"><span>first</span></div>
                    <div class="col col-3 t-card"><span>first</span></div>
                    <div class="col col-4 t-card"><span>first</span></div>
                    <div class="col col-5 t-card"><span>first</span></div>
                    <div class="col col-6 t-card"><span>first</span></div>
                    <div class="col col-7 t-card"><span>first</span></div>
                    <div class="col col-8 t-card"><span>first</span></div>
                    <div class="col col-9 t-card"><span>first</span></div>
                </div>
            </div>
        </div>  
    </div>
    
    <div class="card mock-empty">
        Empty block
    </div>
    
  </div>
`

function calculateMultiHeadWidth() {
    const multiHeadElements = document.getElementsByClassName('multi-head');

    for (const multiHeadElement of multiHeadElements) {
        const columnElements = multiHeadElement.getElementsByClassName('col');
        let sumColumnWidth = 0;

        for (const column of columnElements) {
            const { width } = column.getBoundingClientRect();
            sumColumnWidth += width;
        }

        multiHeadElement.style.width = sumColumnWidth + 'px';
    }
}

function calculateColumnsWidth() {
    const headElement = document.getElementsByClassName('t-head')[0];
    const bodyElement = document.getElementsByClassName('t-body')[0];
    if (!headElement || !bodyElement) {
        throw new Error('No head or body element found!');
    }

    const columnsAmount = headElement.getElementsByClassName('col').length;

    for (let i = 1; i <= columnsAmount; i++) {
        const headColumnElement = headElement.getElementsByClassName(`col-${i}`)[0];
        const bodyColumnElements = bodyElement.getElementsByClassName(`col-${i}`);
        const { width } = headColumnElement.getBoundingClientRect();

        for (let bodyColumn of bodyColumnElements) {
            bodyColumn.style.width = width + 'px';
        }
    }
}

function initStickyColumns() {
    const headElement = document.getElementsByClassName('t-head')[0];
    const bodyElement = document.getElementsByClassName('t-body')[0];

    if (!headElement || !bodyElement) {
        throw new Error('No head or body element found!');
    }

    const columnsAmount = headElement.getElementsByClassName('col').length;
    let prevColWidth = 0;

    for (let i = 1; i <= columnsAmount; i++) {
        const headColumnElement = headElement.getElementsByClassName(`col-${i}`)[0];
        const bodyColumnElements = bodyElement.getElementsByClassName(`col-${i}`);

        if (!headColumnElement.classList.contains('sticky')) {
            break;
        }

        setStickyProperties(headColumnElement, `${prevColWidth}px`);

        for (let bodyColumn of bodyColumnElements) {
            setStickyProperties(bodyColumn, `${prevColWidth}px`);
        }

        const { width } = headColumnElement.getBoundingClientRect();
        prevColWidth = width;
    }
}

function setStickyProperties(element, leftPosition) {
    element.style.position = 'sticky';
    element.style.left = leftPosition;
    element.style.zIndex = '3';
}

document.addEventListener('DOMContentLoaded', () => {
    calculateMultiHeadWidth();
    initStickyColumns();
    calculateColumnsWidth();
});

window.addEventListener('resize', () => {
    calculateMultiHeadWidth();
    calculateColumnsWidth();
    initStickyColumns();
});

