import React from "react";

import "./FactsFilter.css";

const FactsFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="facts-filter">
      <div className="facts-filter__control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
        option value="18740">1894</option>
          <option value="1799">1799</option>
          <option value="1800">1800</option>
          <option value="1801">1801</option>
          <option value="1802">1802</option>
          <option value="1803">1803</option>
          <option value="1804">1804</option>
          <option value="1805">1805</option>
          <option value="1806">1806</option>
          <option value="1807">1807</option>
          <option value="1808">1808</option>
          <option value="1809">1809</option>
          <option value="1810">1810</option>
          <option value="1811">1811</option>
          <option value="1812">1812</option>
          <option value="1813">1813</option>
          <option value="1814">1814</option>
          <option value="1815">1815</option>
          <option value="1816">1816</option>
          <option value="1817">1817</option>
          <option value="1818">1818</option>
          <option value="1819">1819</option>
          <option value="1820">1820</option>
          <option value="1821">1821</option>
          <option value="1822">1822</option>
          <option value="1823">1823</option>
          <option value="1824">1824</option>
          <option value="1825">1825</option>
          <option value="1826">1826</option>
          <option value="1827">1827</option>
          <option value="1828">1828</option>
          <option value="1829">1829</option>
          <option value="1830">1830</option>
          <option value="1831">1831</option>
          <option value="1832">1832</option>
          <option value="1833">1833</option>
          <option value="1834">1834</option>
          <option value="1835">1835</option>
          <option value="1836">1836</option>
          <option value="1837">1837</option>
          <option value="1838">1838</option>
          <option value="1839">1839</option>
          <option value="1840">1840</option>
          <option value="1841">1841</option>
          <option value="1842">1842</option>
          <option value="1843">1843</option>
          <option value="1844">1844</option>
          <option value="1845">1845</option>
          <option value="1846">1846</option>
          <option value="1847">1847</option>
          <option value="1848">1848</option>
          <option value="1849">1849</option>
          <option value="1850">1850</option>
          <option value="1851">1851</option>
          <option value="1852">1852</option>
          <option value="1853">1853</option>
          <option value="1854">1854</option>
          <option value="1855">1855</option>
          <option value="1856">1856</option>
          <option value="1857">1857</option>
          <option value="1858">1858</option>
          <option value="1859">1859</option>
          <option value="1860">1860</option>
          <option value="1861">1861</option>
          <option value="1862">1862</option>
          <option value="1863">1863</option>
          <option value="1864">1864</option>
          <option value="1865">1865</option>
          <option value="1866">1866</option>
          <option value="1867">1867</option>
          <option value="1868">1868</option>
          <option value="1869">1869</option>
          <option value="1870">1870</option>
          <option value="1871">1871</option>
          <option value="1872">1872</option>
          <option value="1873">1873</option>
          <option value="1874">1874</option>
          <option value="1875">1875</option>
          <option value="1876">1876</option>
          <option value="1877">1877</option>
          <option value="1878">1878</option>
          <option value="1879">1879</option>
          <option value="1880">1880</option>
          <option value="1881">1881</option>
          <option value="1882">1894</option>
          <option value="1883">1883</option>
          <option value="1884">1884</option>
          <option value="1885">1885</option>
          <option value="1886">1886</option>
          <option value="1887">1887</option>
          <option value="1888">1888</option>
          <option value="1889">1889</option>
          <option value="1890">1890</option>
          <option value="1891">1891</option>
          <option value="1892">1892</option>
          <option value="1893">1893</option>
          <option value="1894">1894</option>
          <option value="1895">1895</option>
          <option value="1896">1896</option>
          <option value="1897">1897</option>
          <option value="1898">1898</option>
          <option value="1899">1899</option>
          <option value="1900">1900</option>
          <option value="1901">1901</option>
        </select>
      </div>
    </div>
  );
};

export default FactsFilter;
